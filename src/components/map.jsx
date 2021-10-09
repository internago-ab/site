import * as React from "react"
import { VectorMap } from "react-jvectormap"

const EuropeMap = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <VectorMap
        map={"us_aea"}
        backgroundColor="#3b96ce"
        ref="map"
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        containerClassName="map"
      />
    </div>
  )
}

export default EuropeMap
