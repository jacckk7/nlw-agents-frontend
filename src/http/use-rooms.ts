import { useQuery } from "@tanstack/react-query";
import type { GetRoomsResponse } from "./types/get-rooms-response";

export function useRooms() {
    return useQuery({
      queryKey: ['get-rooms'],
      queryFn: async () => {
        const respone = await fetch('http://localhost:3333/rooms');
        const result: GetRoomsResponse = await respone.json();

        return result;
      },
    });
}