import { useRouteError,Link } from "react-router-dom"


const CareerError = () => {
  const error=useRouteError()
  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  )
}

export default CareerError