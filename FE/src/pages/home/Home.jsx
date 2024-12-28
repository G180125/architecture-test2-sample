import ProductTable from "../../components/product_table/ProductTable";
import GridTable from "../../components/grid_table/GridTable";
import Carousel from '../../components/carousel/Carousel';
import useCarouselEventHandlers from '../../components/carousel/hook/CarouselEventHandler';
import getImagePaths from '../../components/carousel/api/CarouselApiCall';

export default function Home () {
    return (
        <>
            <div>Home</div>
            <Carousel images={getImagePaths()}
                carouselEventHandlers={useCarouselEventHandlers}
            />   
            
            <br />

            <ProductTable />
        </>
    )
}