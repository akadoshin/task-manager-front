/** typography */
import { H1, Lead, P } from "@/components/ui/typography";

/** icons */
import { ChevronsDownUp } from "lucide-react";

/** components */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { SignSocialMediaForm, SignUpForm } from "@/components/ui/sign-in-form";
import ButtonLogin from "./ui/button-login";

/** auth */
import { BACKEND_URL } from "@/lib/constants";
import { getSession } from "@/app/actions/auth";

export default async function SigIn() {
  const session = await getSession();

  if (!!session) {
    try {
      const response = await fetch(`${BACKEND_URL}/users/suggestions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `access_token=${session}`,
        },
        credentials: "include",
      });

      const prevUserAccounts: string[] = await response.json();
      const [first, second, ...rest] = prevUserAccounts;

      return (
        <>
          <div className="space-y-2">
            <H1>
              Welcome Back, <span className="text-primary">Taskmaster!</span>
            </H1>
            <Lead>Resume your journey or start fresh, it’s your call!</Lead>
          </div>

          <Tabs defaultValue="nicknames" className="w-full">
            <TabsList>
              <TabsTrigger value="nicknames">Nicknames</TabsTrigger>
              <TabsTrigger value="account">New Account</TabsTrigger>
            </TabsList>

            <TabsContent value="nicknames">
              <Card>
                <CardHeader>
                  <CardDescription>
                    Pick up where you left off. Select one of your past
                    nicknames to dive right in.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Collapsible className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold">
                        Your previous nicknames
                      </h4>

                      {rest.length > 0 && (
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="w-9 p-0">
                            <ChevronsDownUp className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      )}
                    </div>

                    <div className="grid space-y-2">
                      {[first, second].map(
                        (nickname) =>
                          nickname && (
                            <ButtonLogin key={nickname} nickname={nickname} />
                          )
                      )}
                    </div>

                    <CollapsibleContent className="grid space-y-2">
                      {rest.map((nickname) => (
                        <ButtonLogin key={nickname} nickname={nickname} />
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardDescription>
                    Feeling like a fresh start? Create a new nickname and
                    conquer your tasks!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SignUpForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <SignSocialMediaForm className="pb-6" />
        </>
      );
    } catch {}
  }

  return (
    <>
      <div className="space-y-2">
        <H1>Task Manager</H1>
        <P>
          Time to get things done! Let's make your tasks fun and manageable.
        </P>
      </div>

      <SignUpForm />
      <SignSocialMediaForm />
    </>
  );
}
