import Navbar from "../src/component/Navbar"
import Menu_Navbar from "../src/component/Menu_Navbar"
import Layout from "../src/component/Layout"
import Footter from "../src/component/Footter"

export default function Oil_Price() {
  return (
    <div>
      <Menu_Navbar />
      <Layout>
        <div className="mt-5 bg-white/75 rounded-lg p-6 h-[540px]">
          <iframe width="520" height="490" src="https://oil-price.bangchak.co.th/BcpOilPrice2/en" ></iframe>
        </div>
      </Layout>
      <Footter />
    </div>
  )
}
