import { Suspense } from 'react';


const SuspenseLoader = (Component)=>(props) => {
  return (
    <Suspense >
      <Component {...props} />
    </Suspense>
  )
}

export default SuspenseLoader