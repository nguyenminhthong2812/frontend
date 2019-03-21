let DSGH = []

const GioHangReducer = (state = DSGH, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const item = action.item;
            const updateState = [...state, item];
            return updateState;
        case 'TANG_ITEM':
            const tangitem = action.tangitem;
            const updateSateTang = [...state];
            const indextang = updateSateTang.findIndex(e => e.id === tangitem.id);
            //console.log(updateSateTang[indextang]);
            updateSateTang[indextang].soluong = tangitem.soluong;
            updateSateTang[indextang].tongtien = tangitem.tongtien;
            return updateSateTang;
        case 'GIAM_ITEM':
            const giamitem = action.giamitem;
            const updateSateGiam = [...state];
            const indexgiam = updateSateGiam.findIndex(e => e.id === giamitem.id);
            //console.log(updateSateTang[indextang]);
            updateSateGiam[indexgiam].soluong = giamitem.soluong;
            updateSateGiam[indexgiam].tongtien = giamitem.tongtien;
            return updateSateGiam;
        case 'DELETE_ITEM':
            const id = action.id;
            var stateUpdate = [...state];
            const index = stateUpdate.findIndex(e => e.id === id);
            stateUpdate.splice(index, 1);
            return stateUpdate;
        default: return [...state];

    }
}

export default GioHangReducer;