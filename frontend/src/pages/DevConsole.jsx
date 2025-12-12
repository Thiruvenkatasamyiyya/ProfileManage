import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "../components/ui/button";
import {
  useDeleteClientUrlMutation,
  useListClientUrlQuery,
} from "../../redux/api/thirdPartyApi";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import Manual from "../components/Manual";
import ClientDev from "../components/ClientDev";
const DevConsole = () => {
  const {
    data: fData,
    error: fError,
    isLoading: fLoading,
  } = useListClientUrlQuery();

  const [deleteClient,{data,error}] =  useDeleteClientUrlMutation()

  useEffect(()=>{
    console.log(data);
    
    if(data) toast.success(data?.message);
  },[data])
  function handleCopy(data) {
    navigator.clipboard.writeText(data);
    toast.success("copied");
  }

  function handleDelete(clientID) {
     deleteClient({
      clientID
    })

  }


  return (
    <div>
      <Card className="p-6 max-w-6xl mx-auto space-y-6">
        {fData?.data != [] && (
          <CardContent>
            <h1 className="text-2xl font-bold">Your projects</h1>
            <div className="grid grid-cols-4 gap-4">
              {fData?.data?.slice(0,5).map((item, index) => (
                <Card className=""  key={index} >
                  <CardContent>
                    <div className="">
                      <h2 className="mb-4 text-xl font-bold capitalize">
                        {item?.appName}
                      </h2>
                      <label htmlFor="">ClientId</label>
                      <Input
                        type="text"
                        name=""
                        id=""
                        value={item?.clientID}
                        readOnly
                        onClick={() => handleCopy(item?.clientID)}
                      />

                      <label htmlFor="">Client Secret</label>
                      <Input
                        type="text"
                        name=""
                        id=""
                        value={item?.clientSecret}
                        readOnly
                        onClick={() => handleCopy(item?.clientSecret)}
                      />
                      <Button onClick={()=>handleDelete(item?.clientID)} variant="destructive">
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        )}


      </Card>
      <ClientDev/>
      <Manual />
    </div>
  );
};

export default DevConsole;
