import React, { useState } from 'react'
import { toast } from "react-hot-toast";
import { useClientUrlMutation } from '../../redux/api/thirdPartyApi';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const ClientDev = () => {

      const [submitClient, { data, error, isLoading }] = useClientUrlMutation()
      const [appName, setAppName] = useState("");
      const [url, setUrl] = useState("");
      function handleSubmit(e) {
        e.preventDefault();
        if (appName == "" || url == "") {
          toast.error("Fill all fields");
          return;
        }
    
        submitClient({
          appName,
          redirectUrl: url,
        });
      }
  return (
    <div className='mt-6 p-6 max-w-4xl mx-auto space-y-6'>
        <Card className="">
        <CardContent className="mt-2">
          <h1 className="text-2xl font-bold">Welcome to Developer Console </h1>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel>App Name :</FieldLabel>
                <Input
                  placeholder="eg : Ecommerce"
                  onChange={(e) => setAppName(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel>Redirect Url :</FieldLabel>
                <Input
                  placeholder="code redirect"
                  onChange={(e) => setUrl(e.target.value)}
                />
              </Field>
            </FieldGroup>
            <Button type={"submit"} disabled={isLoading}>{
              isLoading ? "Generating..." : "Generate "}</Button>
          </form>
        </CardContent>
        </Card>
    </div>
  )
}

export default ClientDev