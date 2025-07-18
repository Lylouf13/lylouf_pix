import { createSlice } from "@reduxjs/toolkit";
import image from "../../types/image";

interface ViewerState {
  open: boolean;
  image: image;
}
const initialState: ViewerState = {
  open: false,
  image: { name: "", description: "", link: "", tags: [] },
};

export const viewerSlice = createSlice({
  name: "viewerManager",
  initialState,
  reducers: {
    closeViewer: (state) => {
      state.open = false;
    },
    openViewer: (state, action) => {
      state.open = true;
      state.image = action.payload;
    },
    
  },
});

export const { openViewer, closeViewer } = viewerSlice.actions;

export default viewerSlice.reducer;
