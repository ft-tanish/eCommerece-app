export const filterData = (searchText, allProducts) => {
    const filterData = allProducts?.filter((allProduct) =>
        allProduct.title.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return filterData;
}