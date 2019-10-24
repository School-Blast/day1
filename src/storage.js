var storage={
    getData(key){
        return JSON.parse(localStorage.getItem(key))
    },
    setData(key,arr){
        localStorage.setItem(key,JSON.stringify(arr))
    }
}

export default storage