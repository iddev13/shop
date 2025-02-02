"use client";

import { useState, useEffect, useRef } from "react";

import { NavItemType } from "@/types/header";
import { Dropdown } from "@/components/header/dropdown";
import { HeaderLink } from "@/components/header/header-link";
import { DropdownArrow } from "@/components/header/dropdown-arrow";
import { DropdownBtn } from "@/components/header/dropdown-btn";
import { SubMenuLink } from "@/components/header/sub-menu-link";

interface INavBar {
  id: number;
  items: NavItemType;
  depthLevel: number;
}

export const MenuItemsMobile = ({ id, items, depthLevel }: INavBar) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const ref = useRef<HTMLLIElement | null>(null);
  useEffect(() => {
    const handler = (event: Event): void => {
      const clickedElement = event.target as HTMLElement;
      event.stopPropagation();

      if (dropdown && ref.current && !ref.current.contains(clickedElement)) {
        setDropdown(false);
      }

      if (!dropdown && ref.current && ref.current.contains(clickedElement)) {
        setDropdown(true);
      } else if (
        ref.current &&
        ref.current.contains(clickedElement) &&
        depthLevel.toString() ===
          clickedElement.closest(".menu-items")?.getAttribute("data-depth") &&
        clickedElement.classList.contains("dropdown-btn")
      ) {
        setDropdown(false);
      }
    };
    setIsMounted(true);
    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, [depthLevel, dropdown]);

  if (!isMounted) {
    return null;
  }

  return (
    <li
      data-id={id}
      data-depth={depthLevel}
      className="menu-items relative w-full px-2"
      ref={ref}
    >
      {
        // If there is a submenu
        items.subMenu ? (
          depthLevel === 0 ? (
            <DropdownBtn
              href={items.href}
              label={items.label}
              dropdownStatus={dropdown}
              depthLevel={depthLevel}
            >
              <>
                <DropdownArrow dropdownStatus={dropdown} />
                <Dropdown
                  depthLevel={depthLevel}
                  submenu={items.subMenu}
                  dropdown={dropdown}
                />
              </>
            </DropdownBtn>
          ) : (
            // If the second or more depth level, then SubMenuLink
            <DropdownBtn
              href={items.href}
              label={items.label}
              dropdownStatus={dropdown}
              depthLevel={depthLevel}
            >
              <>
                <DropdownArrow dropdownStatus={dropdown} />
                <Dropdown
                  depthLevel={depthLevel}
                  submenu={items.subMenu}
                  dropdown={dropdown}
                />
              </>
            </DropdownBtn>
          )
        ) : items.gallery ? (
          <DropdownBtn
            href={items.href}
            label={items.label}
            dropdownStatus={dropdown}
            depthLevel={depthLevel}
          >
            <>
              <DropdownArrow dropdownStatus={dropdown} />
              <Dropdown
                depthLevel={depthLevel}
                gallery={items.gallery}
                dropdown={dropdown}
              />
            </>
          </DropdownBtn>
        ) : items.smallMenu ? (
          <DropdownBtn
            href={items.href}
            label={items.label}
            dropdownStatus={dropdown}
            depthLevel={depthLevel}
          >
            <>
              <DropdownArrow dropdownStatus={dropdown} />
              <Dropdown
                depthLevel={depthLevel}
                smallMenu={items.smallMenu}
                dropdown={dropdown}
              />
            </>
          </DropdownBtn>
        ) : items.textMenu ? (
          <DropdownBtn
            href={items.href}
            label={items.label}
            dropdownStatus={dropdown}
            depthLevel={depthLevel}
          >
            <>
              <DropdownArrow dropdownStatus={dropdown} />
              <Dropdown
                depthLevel={depthLevel}
                textMenu={items.textMenu}
                dropdown={dropdown}
              />
            </>
          </DropdownBtn>
        ) : items.bigMenu ? (
          <DropdownBtn
            href={items.href}
            label={items.label}
            dropdownStatus={dropdown}
            depthLevel={depthLevel}
          >
            <>
              <DropdownArrow dropdownStatus={dropdown} />
              <Dropdown
                depthLevel={depthLevel}
                bigMenu={items.bigMenu}
                dropdown={dropdown}
              />
            </>
          </DropdownBtn>
        ) : // If there is no submenu
        depthLevel === 0 ? (
          // If the first depth level then HeaderLink
          <HeaderLink href={items.href} label={items.label}></HeaderLink>
        ) : (
          // If the second or more depth level, then SubMenuLink
          <SubMenuLink href={items.href} label={items.label}></SubMenuLink>
        )
      }
    </li>
  );
};
