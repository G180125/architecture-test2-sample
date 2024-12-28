const ProductCard = ({ index, item }) => { 
    return (
        <div
            key={index}
            className="
                border p-4 m-1 rounded shadow 
                transition-transform transform 
                hover:scale-105 hover:border-blue-500
                hover:shadow-lg
            "
        >
            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
            <p className="text-gray-600">Price: {item.price}</p>
        </div>
    );
};

export default ProductCard;
