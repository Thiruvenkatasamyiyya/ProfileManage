import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Manual = ({ clientId, clientSecret, redirectUri }) => {
  const AuthorizationURL = `https://thiru.com/oauth/codeGenerate`;
  const TokenURL = `https://thiru.com/oauth/token`;
  const UserInfoURL = `https://thiru.com/api/userinfo`;

  const copy = (text) => navigator.clipboard.writeText(text);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">OAuth App Instructions</h1>

      {/* Credentials */}


      {/* Authorization URL */}
      <Card className="rounded-2xl shadow">
        <CardHeader>
          <h2 className="text-xl font-semibold">Authorization URL</h2>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm">
            Redirect users to this URL to start the OAuth flow:
          </p>

          <div className="bg-gray-100 p-3 rounded-xl flex justify-between">
            <code className="text-sm">{AuthorizationURL}</code>
            <Button variant="ghost" onClick={() => copy(AuthorizationURL)}>
              <Copy size={18} />
            </Button>
          </div>

          <p className="text-sm font-medium">Required Query Parameters:</p>
          <pre className="bg-black text-white p-4 rounded-xl text-sm">
{`clienID
redirectUri
response_type=code`}
          </pre>

          <p className="text-sm font-medium">Example:</p>
          <pre className="bg-black text-white p-4 rounded-xl text-sm overflow-auto">
{`https://yourdomain.com/oauth/authorize?
  clientID=${clientId}
  &redirectUri=${redirectUri}
  &response_type=code`}
          </pre>
        </CardContent>
      </Card>

      {/* Token Exchange */}
      <Card className="rounded-2xl shadow">
        <CardHeader>
          <h2 className="text-xl font-semibold">Token Exchange Endpoint</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-2">Make a POST request to:</p>

          <div className="bg-gray-100 p-3 rounded-xl flex justify-between mb-4">
            <code className="text-sm">{TokenURL}</code>
            <Button variant="ghost" onClick={() => copy(TokenURL)}>
              <Copy size={18} />
            </Button>
          </div>

          <p className="text-sm font-medium">Required Body:</p>
          <pre className="bg-black text-white p-4 rounded-xl text-sm">
{`{
  "clientID": "${clientId}",
  "clientSecret": "${clientSecret}",
  "redirect_uri": "${redirectUri}",
  "code": "RECEIVED_CODE"
}`}
          </pre>
        </CardContent>
      </Card>



      {/* Security Notes */}
      <Card className="rounded-2xl shadow border-red-300">
        <CardHeader>
          <h2 className="text-xl font-semibold text-red-600">Security Notes</h2>
        </CardHeader>
        <CardContent className="text-sm space-y-2 text-red-700">
          <p>• Do NOT expose your client secret on the frontend.</p>
          <p>• Redirect URL must match exactly.</p>
          <p>• Use HTTPS at all times.</p>
          <p>• Always validate the "state" parameter.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Manual;
