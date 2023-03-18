import useItems from "./useItem"
import getBrandsObj from "../mockData/getBrands"

const useBrand = () => {
    return useItems(getBrandsObj())
}

export default useBrand