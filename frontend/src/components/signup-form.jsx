import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import toast from "react-hot-toast"

export function SignupForm({
  ...props
}) {

  const [regi,setRegi] = useState({
    userName : "",
    email : "",
    password : "",
    confirmPassword : ""
  })

  function handleSubmit(e){
    e.preventDefault();
    if(regi.userName == "" || regi.email =="" || regi.confirmPassword == "" || regi.password == ""){
      toast.error("Fill all the fields");
      return;
    }
    if(regi.password != regi.confirmPassword){
      toast.error("Password might same");
      setRegi({
        ...regi,
        password : "",
        confirmPassword : ""
      })
      return;
    }
    props.handleRegister(regi,isLoading);
    // setRegi({
    //     userName : "",
    //     email : "",
    //     password : "",
    //     confirmPassword : ""
    //   })
    
  }


  
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" value={regi.userName} required onChange={(e)=>setRegi({...regi,userName : e.target.value})} />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="m@example.com" value={regi.email} required onChange={(e)=>setRegi({...regi,email : e.target.value})} />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required value={regi.password} onChange={(e)=>setRegi({...regi,password : e.target.value})}/>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required value={regi.confirmPassword} onChange={(e)=>setRegi({...regi,confirmPassword : e.target.value})}/>
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit" onClick={handleSubmit} >Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="/login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
