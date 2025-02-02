import { useMedia } from "react-use";
import { AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  DropType,
  SubMenuType,
  GalleryType,
  SmallMenuType,
} from "@/types/header";
import { MenuItems } from "@/components/header/menu-items";
import { MenuItemsMobile } from "@/components/header/menu-items-mobile";
import { GalleryCard } from "@/components/header/gallery-card";
import { SmallMenu } from "@/components/header/small-menu";
import { TextMenu } from "@/components/header/text-menu";
import { BigMenu } from "@/components/header/big-menu";
import { MotionUl } from "@/types/framer-motion";

export const Dropdown = ({
  submenu,
  gallery,
  smallMenu,
  textMenu,
  bigMenu,
  dropdown,
  depthLevel,
  position,
}: DropType) => {
  // Menu depth level
  depthLevel = depthLevel + 1;

  // If Menu depth level > 1 (more than the second level), add class dropdown-submenu
  const dropdownClass = depthLevel > 1 && " lg:top-0 z-[4] lg:left-full";
  // Submenu position, left or right
  const dropdownPositionClass =
    depthLevel > 1 && position === "left" ? "lg:-left-full" : "";

  const isMobile = useMedia("(max-width: 1024px)");

  return (
    <AnimatePresence>
      <MotionUl
        initial={{ opacity: 0, height: 0, visibility: "hidden" }}
        animate={{
          opacity: dropdown ? 1 : 0,
          height: dropdown ? "auto" : 0,
          visibility: dropdown ? "visible" : "hidden",
        }}
        transition={{
          opacity: {
            duration: 0,
          },
          height: {
            duration: 0.3,
          },
          visibility: {
            duration: 0.3,
          },
        }}
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        aria-hidden={dropdown ? "false" : "true"}
        data-depthlevel={depthLevel}
        className={cn(
          "dropdown block overflow-hidden relative lg:absolute lg:z-[3] lg:top-full w-full bg-card",
          dropdownClass,
          dropdown && "animate-delayOverflow",
          dropdownPositionClass,
          submenu && "lg:w-[200px]",
          gallery &&
            "w-full lg:w-[800px] lg:left-0 lg:-translate-x-1/2 flex flex-col lg:flex-row  items-center gap-2 rounded-lg shadow-md",
          smallMenu &&
            "w-full lg:w-[400px] lg:right-0 flex flex-col lg:flex-row  items-center gap-2 lg:rounded-lg lg:px-2 shadow-md",
          textMenu &&
            "w-full lg:max-w-5xl lg:left-0 flex flex-col lg:flex-row  items-center gap-2 rounded-lg shadow-md",
          bigMenu &&
            "w-full lg:max-w-5xl lg:left-0 flex flex-col lg:flex-row  items-center gap-2 rounded-lg shadow-md"
        )}
      >
        {submenu?.map((submenu: SubMenuType) => {
          if (isMobile) {
            return (
              <MenuItemsMobile
                id={submenu.id}
                items={submenu}
                depthLevel={depthLevel}
                key={submenu.id}
              />
            );
          }
          return (
            <MenuItems
              items={submenu}
              depthLevel={depthLevel}
              key={submenu.id}
            />
          );
        })}
        {gallery?.map((elem: GalleryType) => {
          if (isMobile) {
            return (
              <li className="w-full first:pt-2 last:pb-2" key={elem.id}>
                <GalleryCard
                  href={elem.href}
                  label={elem.label}
                  text={elem.text}
                  imageUrl={elem.imageUrl}
                />
              </li>
            );
          }
          return (
            <li className="w-1/3 py-2 first:pl-2 last:pr-2" key={elem.id}>
              <GalleryCard
                href={elem.href}
                label={elem.label}
                text={elem.text}
                imageUrl={elem.imageUrl}
              />
            </li>
          );
        })}
        {smallMenu?.map((elem: SmallMenuType) => {
          if (isMobile) {
            return (
              <li className="w-full first:pt-2 last:pb-2" key={elem.id}>
                <SmallMenu
                  id={elem.id}
                  categoryHref={elem.categoryHref}
                  categoryLabel={elem.categoryLabel}
                  list={elem.list}
                />
              </li>
            );
          }
          return (
            <li className="w-1/2 py-2" key={elem.id}>
              <SmallMenu
                id={elem.id}
                categoryHref={elem.categoryHref}
                categoryLabel={elem.categoryLabel}
                list={elem.list}
              />
            </li>
          );
        })}
        {bigMenu &&
          (isMobile ? (
            <li className="w-full first:pt-2 last:pb-2">
              <BigMenu
                id={bigMenu.id}
                list={bigMenu.list}
                carouselHref={bigMenu.carouselHref}
                carouselLabel={bigMenu.carouselLabel}
                carousel={bigMenu.carousel}
              />
            </li>
          ) : (
            <li className="w-full p-2">
              <BigMenu
                id={bigMenu.id}
                list={bigMenu.list}
                carouselHref={bigMenu.carouselHref}
                carouselLabel={bigMenu.carouselLabel}
                carousel={bigMenu.carousel}
              />
            </li>
          ))}
        {textMenu &&
          (isMobile ? (
            <li className="w-full first:pt-2 last:pb-2">
              <TextMenu
                id={textMenu.id}
                links={textMenu.links}
                text={textMenu.text}
              />
            </li>
          ) : (
            <li className="w-full p-2">
              <TextMenu
                id={textMenu.id}
                links={textMenu.links}
                text={textMenu.text}
              />
            </li>
          ))}
      </MotionUl>
    </AnimatePresence>
  );
};
