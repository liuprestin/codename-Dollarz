'use client';
import React, { useState } from 'react';
import { Sidebar, useSidebar, Overlay, Button } from '@rewind-ui/core';
import { RocketLaunch, Gavel, Gauge, BookOpenText } from "@phosphor-icons/react"; //needed if server side rendering see documentation for details

export default function NavSideBar() {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();

  return (
      <><Sidebar
      onToggle={(state) => {
        setExpanded(state.expanded);
        setMobile(state.mobile);
      } }
      className="absolute"
    >
      <Sidebar.Head>
        <Sidebar.Head.Logo>
        </Sidebar.Head.Logo>
        <Sidebar.Head.Title icon={<RocketLaunch />}>DollarZ</Sidebar.Head.Title>
        <Sidebar.Head.Toggle />
      </Sidebar.Head>

      <Sidebar.Nav>
        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Item icon={<Gauge />} label="Dashboard" href="/" active />
        </Sidebar.Nav.Section>

        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Title>Expenses</Sidebar.Nav.Section.Title>
          <Sidebar.Nav.Section.Item icon={<RocketLaunch />} label="Manage" as="button">
            <Sidebar.Nav.Section isChild>
              <Sidebar.Nav.Section.Item
                icon={<span className="w-1 h-1 rounded bg-transparent" />}
                label="List all expenses"
                href="/expenses" />
              <Sidebar.Nav.Section.Item
                icon={<span className="w-1 h-1 rounded bg-transparent" />}
                label="Add new categories"
                href="/categories" />
            </Sidebar.Nav.Section>
          </Sidebar.Nav.Section.Item>
        </Sidebar.Nav.Section>

        <Sidebar.Nav.Section>
          <Sidebar.Nav.Section.Title>Support</Sidebar.Nav.Section.Title>
          <Sidebar.Nav.Section.Item icon={<BookOpenText />} label="Documentation" href="#" />
          <Sidebar.Nav.Section.Item icon={<Gavel />} label="Legal" href="#" />
          <Sidebar.Separator />
        </Sidebar.Nav.Section>
      </Sidebar.Nav>

      <Sidebar.Footer>
        <div className="flex flex-col justify-center items-center text-sm">
          <span className="font-semibold">Dollarz</span>
          <span>version 1.0.0</span>
        </div>
      </Sidebar.Footer>
    </Sidebar><main
        className={`transition-all transform duration-100 text-slate-700 flex w-full flex-col items-center ${expanded ? 'md:ml-64' : 'md:ml-20'}`}
        {...mobile && (
          <Overlay
            blur="none"
            onClick={() => {
              sidebar.toggleMobile();
            } }
            className="md:hidden z-40" />
        )} /><header className="flex flex-row sticky top-0 px-8 items-center bg-white border-b border-b-gray-100 w-full shadow-sm min-h-[4rem]">
        <Button
          onClick={() => {
            sidebar.toggleMobile();
          } }
          size="sm"
          color="white"
          icon
          className="ml-auto flex md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M448 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
            <path
              className="opacity-50"
              d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z" />
          </svg>
        </Button>
      </header></>

  );
}
