import { Loader } from "components/Loader/Loader"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"


export const SharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      </main>
    </>
    
  )
}