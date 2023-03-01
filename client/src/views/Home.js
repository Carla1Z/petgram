import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories/index.js'
import {getCategories} from '../redux/actions.js'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react"

export const Home = () => {
    const dispatch = useDispatch()
    const allCategories = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

  return (
    <div>
        <h2>Home</h2>
        <ListOfCategories allCategories={allCategories} />
    </div>
  )
}
