import { H2, P } from "@/components/ui/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Calendar,
  ChevronsDown,
  ChevronsUp,
  CirclePlus,
  ClipboardList,
  Clock,
  Dot,
  EllipsisVertical,
  GripVertical,
  Hash,
  LibraryBig,
  ListTodo,
  Plus,
  PlusCircle,
  SignalMedium,
  XIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { AddTaskDialog } from "@/components/add-task-dialog";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { getSession } from "@/app/actions/auth";
import { BACKEND_URL } from "@/lib/constants";

enum TaskSize {
  Small = "small",
  Large = "large",
}

function SubTask({
  title,
  desc,
  showDesc,
}: {
  title: string;
  desc?: string;
  showDesc?: boolean;
}) {
  return (
    <div className="items-center flex justify-between px-4 py-4 bg-gray-50 rounded-lg">
      <div
        className={cn("flex items-top gap-3", { "items-center": !showDesc })}
      >
        <Checkbox id="terms" className="rounded-full" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {title}
          </label>
          {desc && showDesc && (
            <p className="text-sm text-muted-foreground">{desc}</p>
          )}
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 data-[state=open]:bg-accent"
      >
        <GripVertical />
      </Button>
    </div>
  );
}

function TasksList({ category }: { category: TaskSize }) {
  const progress = Math.floor(Math.random() * 100);

  return (
    <Card
      className={cn(
        {
          "col-span-1 md:col-span-1": category === TaskSize.Small,
          "col-span-2 md:col-span-2": category === TaskSize.Large,
        },
        "cursor-pointer hover:shadow-lg hover:ring-1 transition-all"
      )}
    >
      <CardHeader>
        {/* <AspectRatio ratio={16 / 9} className="mb-1">
          <Image
            src="/cover.jpg"
            alt="Photo by Drew Beamer"
            fill
            className="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio> */}
        <CardTitle className="flex justify-between items-center">
          <p className="line-clamp-1 text-lg md:line-clamp-2 md:text-xl">
            Recordar reunirme con el Doc Zanches
          </p>
          <div className="flex gap-2">
            <Badge
              variant="none"
              className="flex gap-1 bg-red-200 text-red-500"
            >
              <ArrowUpRight size={16} />
              {category === TaskSize.Large ? "Alta" : ""}
            </Badge>
            {/* <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 data-[state=open]:bg-accent"
            >
              <EllipsisVertical />
            </Button> */}
          </div>
        </CardTitle>
        <CardDescription className="line-clamp-2 md:line-clamp-3 text-sm">
          Reunión importante con el Doc Zanches para discutir temas académicos y
          avances en proyectos.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Separator />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground flex items-center gap-2">
              <ListTodo />
              <span
                className={cn("hidden sm:flex text-sm", {
                  flex: category === TaskSize.Large,
                })}
              >
                SUB-TASKS
              </span>
            </p>
            <p>{progress}%</p>
          </div>
          <Progress value={progress} className="w-full h-2" />
        </div>

        <div
          className={cn("flex-col gap-4 hidden sm:flex", {
            flex: category === TaskSize.Large,
          })}
        >
          <SubTask
            showDesc={category === TaskSize.Large}
            title="Confirmar horario"
            desc="Enviar un mensaje o verificar la hora programada para la reunión."
          />
          <SubTask
            showDesc={category === TaskSize.Large}
            title="Preparar puntos de discusión"
            desc="Hacer una lista de temas importantes para tratar durante la reunión."
          />
          <SubTask
            showDesc={category === TaskSize.Large}
            title="Revisar documentos relevantes"
            desc="Asegúrate de tener los documentos y notas necesarios."
          />
        </div>
      </CardContent>
      <CardFooter>
        {/* <Separator /> */}
        <div
          className={cn("w-full flex justify-between overflow-hidden", {
            hidden: category === TaskSize.Small,
          })}
        >
          <div className="flex gap-1">
            {/* <ChevronsUp className="mr-2 text-red-400 bg-red-100 p-0.5 rounded-md" /> */}
            <Badge variant="default">To Do</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock size={12} /> 8:00 PM
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar size={12} /> Today
            </Badge>
          </div>
          <div className="hidden md:flex gap-1">
            <Badge variant="secondary">#Wellness</Badge>
            <Badge variant="secondary">#Mindfulness</Badge>
          </div>
        </div>
        {/* <Badge variant="secondary">#Mindfulness</Badge>
          <Badge variant="secondary">#Journaling</Badge>
          <Badge variant="secondary">#DailyRoutine</Badge> */}
      </CardFooter>
    </Card>
  );
}

export default function DashboardPage() {
  // className="hidden md:flex"
  return (
    <div className="flex flex-col gap-6">
      <H2>Tasks</H2>
      <Tabs defaultValue="overview" className="flex flex-col gap-4">
        <div className="md:flex md:justify-between space-y-6 md:space-y-0">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="toDo">To do</TabsTrigger>
            <TabsTrigger value="inProgress">In Progress</TabsTrigger>
            <TabsTrigger value="done">Done</TabsTrigger>
          </TabsList>

          <AddTaskDialog />
        </div>

        <div className="flex flex-col gap-3">
          <Input placeholder="Search tasks..." className="md:w-2/3" />
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-dashed border-2"
            >
              <LibraryBig /> Priority
              <Separator orientation="vertical" className="h-4 hidden" />
              <div className="flex gap-1 hidden">
                <Badge>To do</Badge>
                <Badge>Done</Badge>
              </div>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-dashed border-2"
            >
              <Hash /> Tags
              <Separator orientation="vertical" className="h-4 hidden" />
              <div className="flex gap-1 hidden">
                <Badge>To do</Badge>
                <Badge>Done</Badge>
              </div>
            </Button>
            <Button variant="ghost" className="hidden">
              Reset <XIcon />
            </Button>
          </div>
        </div>

        <TabsContent
          value="overview"
          className="grid grid-flow-row-dense grid-cols-2 gap-4"
        >
          <TasksList category={TaskSize.Large} />
          <TasksList category={TaskSize.Small} />
          <TasksList category={TaskSize.Large} />
          <TasksList category={TaskSize.Small} />
          <TasksList category={TaskSize.Large} />
          <TasksList category={TaskSize.Small} />
          <TasksList category={TaskSize.Large} />
          <TasksList category={TaskSize.Large} />
          <TasksList category={TaskSize.Small} />
          <TasksList category={TaskSize.Small} />
        </TabsContent>
        <TabsContent value="toDo">
          <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-6 md:max-w-7xl md:px-8">
              <div className="mt-10 grid gap-4 sm:mt-16 md:grid-rows-2">
                <div className="relative md:row-span-2">
                  <div className="absolute inset-px rounded-md bg-white md:rounded-l-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.md)+1px)] md:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                      <p className="mt-2 text-md font-medium tracking-tight text-gray-950 max-md:text-center">
                        Mobile friendly
                      </p>
                      <p className="mt-2 max-w-md text-sm/6 text-gray-600 max-md:text-center">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo.
                      </p>
                    </div>
                    <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-md:mx-auto max-md:max-w-sm">
                      <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                        <img
                          className="size-full object-cover object-top"
                          src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-md shadow ring-1 ring-black/5 md:rounded-l-[2rem]"></div>
                </div>
                <div className="relative max-md:row-start-1">
                  <div className="absolute inset-px rounded-md bg-white max-md:rounded-t-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.md)+1px)] max-md:rounded-t-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-md font-medium tracking-tight text-gray-950 max-md:text-center">
                        Performance
                      </p>
                      <p className="mt-2 max-w-md text-sm/6 text-gray-600 max-md:text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                        maiores impedit.
                      </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center px-8 max-md:pb-12 max-md:pt-10 sm:px-10 md:pb-2">
                      <img
                        className="w-full max-md:max-w-xs"
                        src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-md shadow ring-1 ring-black/5 max-md:rounded-t-[2rem]"></div>
                </div>
                <div className="relative max-md:row-start-3 md:col-start-2 md:row-start-2">
                  <div className="absolute inset-px rounded-md bg-white"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.md)+1px)]">
                    <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                      <p className="mt-2 text-md font-medium tracking-tight text-gray-950 max-md:text-center">
                        Security
                      </p>
                      <p className="mt-2 max-w-md text-sm/6 text-gray-600 max-md:text-center">
                        Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                        suspendisse semper morbi.
                      </p>
                    </div>
                    <div className="flex flex-1 items-center [container-type:inline-size] max-md:py-6 md:pb-2">
                      <img
                        className="h-[min(152px,40cqw)] object-cover"
                        src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-md shadow ring-1 ring-black/5"></div>
                </div>
                <div className="relative md:row-span-2">
                  <div className="absolute inset-px rounded-md bg-white max-md:rounded-b-[2rem] md:rounded-r-[2rem]"></div>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.md)+1px)] max-md:rounded-b-[calc(2rem+1px)] md:rounded-r-[calc(2rem+1px)]">
                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                      <p className="mt-2 text-md font-medium tracking-tight text-gray-950 max-md:text-center">
                        Powerful APIs
                      </p>
                      <p className="mt-2 max-w-md text-sm/6 text-gray-600 max-md:text-center">
                        Sit quis amet rutrum tellus ullamcorper ultricies libero
                        dolor eget sem sodales gravida.
                      </p>
                    </div>
                    <div className="relative min-h-[30rem] w-full grow">
                      <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                          <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                              NotificationSetting.jsx
                            </div>
                            <div className="border-r border-gray-600/10 px-4 py-2">
                              App.jsx
                            </div>
                          </div>
                        </div>
                        <div className="px-6 pb-14 pt-6">hola</div>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-md shadow ring-1 ring-black/5 max-md:rounded-b-[2rem] md:rounded-r-[2rem]"></div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="inProgress">Missed</TabsContent>
        <TabsContent value="done">Celebrate</TabsContent>
      </Tabs>
    </div>
  );
}
