"use client";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const isMeetngOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call?.state.createdBy.id;
  if (!isMeetngOwner) return null;
  return (
    <Button
      onClick={async () => {
        await call?.endCall();
        router.push("/");
      }}
      className="bg-red-500"
    >
      End call for every one
    </Button>
  );
};

export default EndCallButton;
