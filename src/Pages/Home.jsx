import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import axios from 'axios'
import HeaderList from '../Components/Header/HeaderList'

function Home() {
    const [category,setCategory] = useState([])
      useEffect(() => {
        getCategories();
      }, [])

      const getCategories = async()=>{
            const datas = await axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
              console.log(datas.data[0].table_menu_list,'jjjj')
              const menulist = datas.data[0].table_menu_list
              setCategory(menulist)
        }
  return (
    <div><Header />
    <HeaderList category={category}/>
    </div>
  )
}

export default Home
