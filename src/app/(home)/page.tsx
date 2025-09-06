import Header from "@/components/header";
import Container from "@/components/container";
import FloatinBox from "./_components/floatin-box";
import HeroContainer from "./_components/hero_container";
const home = () => {
  return (
    <>
      <Header />
      <Container className="w-full flex-1 flex justify-center items-center bg-accent sm:rounded-[32px] px-4 py-8 sm:mb-4 border border-border relative overflow-hidden __bg-hero">
        <HeroContainer />
        <FloatinBox
          className="-left-8 top-24 bg-[#fff9b1]"
          initialPosition="-100%"
        />
        <FloatinBox
          className="-right-8 bottom-24 bg-[#fff9b1]"
          initialPosition="100%"
        />
      </Container>
    </>
  );
};

export default home;
