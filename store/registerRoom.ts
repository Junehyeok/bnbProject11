import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    reducers: {
        //* 큰 건물 유형 변경하기
        setLargeBuildingType(state, action: PayloadAction<string>) {
            if (action.payload === "") {
            state.largeBuildingType = null;
            }
            console.log("setLargeBuildingType");
            console.log(action.payload);
            state.largeBuildingType = action.payload;
            return state;
        },
        //* 건물 유형 변경하기
        setBuildingType(state, action: PayloadAction<string>) {
            if (action.payload === "") {
                state.buildingType = null;
            }
            state.buildingType = action.payload;
            return state;
        },
    },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
