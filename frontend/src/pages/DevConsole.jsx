import React, { useState } from "react";
import { Input } from "../components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "../components/ui/button";
import {
  useClientUrlMutation,
  useListClientUrlQuery,
} from "../../redux/api/thirdPartyApi";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import Manual from "../components/Manual";
const DevConsole = () => {
  const {
    data: fData,
    error: fError,
    isLoading: fLoading,
  } = useListClientUrlQuery();

  const [submitClient, { data, error, isLoading }] = useClientUrlMutation();
  const [appName, setAppName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    // const {data, error, isLoading} = useLazyListClientUrlQuery()
  }, []);
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
  console.log(data, error, isLoading);
  console.log(fData, fError);

  return (
    <div>
      {fData?.data !=[] && (
        <div>
          <h1>Your projects</h1>
          <div>
            {fData?.data?.map((item, index) => (
              <div key={index}>
                <h2>{item?.appName}</h2>
                <label htmlFor="">ClientId</label>
                <input type="text" name="" id="" value={item?.clientID} />
                <label htmlFor="">Client Secret</label>
                <input type="text" name="" id="" value={item?.clientSecret} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h1>Welcome to Developer Console </h1>
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
          <Button type={"submit"}>Generate</Button>
        </form>
      </div>
      <Manual/>
    </div>
  );
};

export default DevConsole;
