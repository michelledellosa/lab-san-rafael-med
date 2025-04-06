//@refresh
import HomeMain from "@/components/home/HomeMain";
import HomeThreeMain from "@/components/homeThree/HomeThreeMain";
import Wrapper from "@/layout/DefaultWrapper";

const Home = () => {
  return (
    <>
      <Wrapper>
        <main>
          {/*<HomeMain />*/}
          <HomeThreeMain/>
        </main>
      </Wrapper>
    </>
  );
}

export default Home