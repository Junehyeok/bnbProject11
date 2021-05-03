import { createSlice } from "@reduxjs/toolkit";

type RegisterRoomState = {
    largeBuildingType: string | null;
    buildingType: string | null;
    roomType: string | null;
    isSetUpForGuest: boolean | null;
}

//* 초기 상태
const initialState: RegisterRoomState = {
    largeBuildingType: null,
    //건물유형
    buildingType: null,
    //숙소유형
    roomType: null,
    //게스트 전용?
    isSetUpForGuest: null,
};

const registerRoom = createSlice({
    name: "registerRoom",
    initialState,
    reducers: {},
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
