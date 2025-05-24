import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
// import dummy from '/subNavbar/image10.png';

const menuItems = [
  { label: "BAHİS", path: "/betting", icon: "fa-solid fa-futbol" },
  { label: "CANLI BAHİS", path: "/live", icon: "fa fa-stopwatch" },
  { label: "Esports", path: "/esports", icon: "fa fa-gamepad" },
  { label: "SANAL BAHİS", path: "/virtual", icon: "fab fa-cloudsmith" },
  { label: "CANLI CASİNO", path: "/live-casino", icon: "fa fa-dice-five" },
  { label: "Slot", path: "/casino", icon: "fa fa-coins" },
  { label: "JetX", path: "/", icon: " fa fa-chess-board" },
  { label: "Raptor", path: "/", icon: "fa fa-chess-board" },
  { label: "Zeplin", path: "/", icon: "fa fa-chess-board" },
  { label: "Spaceman", path: "/", icon: "fa fa-chess-board" },
  { label: "OnwinX", path: "/", icon: "fa fa-chess-board" },
  { label: "Oyunlar", path: "/games", icon: "fa-solid fa-triangle-exclamation" },
  { label: "Lotto", path: "/parlayboy", icon: "fa-brands fa-bots" },
  { label: "TOMBALA", path: "/login", icon: "fa fa-chess-board" },
  { label: "ZEPPELIN", path: "/login", icon: "fab fa-fly" },
  { label: "Spaceman", path: "/", icon: " fa-square" },
  { label: "PROMOSYONLAR", path: "/promotions", icon: "far fa-bullhorn" },
  { label: "Onwin TV", path: "/", icon: "fa fa-tv" },
];

const SideNavbar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="w-5 h-5 cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#201633] text-white">
          <SheetHeader>
            {/* <VisuallyHidden>
              <SheetTitle>Sidebar Menu</SheetTitle>
            </VisuallyHidden> */}
            <SheetDescription />
          </SheetHeader>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur odio nostrum numquam veniam sunt quod qui, animi blanditiis quos amet impedit distinctio consequuntur iure perspiciatis facere laborum quia esse voluptates consequatur architecto eos hic fuga? Earum voluptatum sapiente enim dolorem vero explicabo inventore distinctio harum, eum quibusdam laudantium minima sed quia vel fugit, sequi laboriosam perferendis? Earum neque, animi a quae omnis beatae, mollitia non odit, in praesentium quasi harum illo. In itaque, molestias obcaecati voluptas amet reiciendis perferendis dolore dolor id natus ducimus officia odio maiores voluptates hic ex libero animi recusandae rerum omnis, non perspiciatis est nesciunt!
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideNavbar;
