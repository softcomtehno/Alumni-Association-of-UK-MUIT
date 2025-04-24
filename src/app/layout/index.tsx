import { Outlet } from "react-router-dom";
import { Footer, Header } from "~widgets/index";

export const GenericLayout = () => {
  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 100, // Когда появится кнопка (100px вниз)
  // });

  // const handleClick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div>
      <Header />
      <Outlet />
      {/* <Zoom in={trigger}>
        <Fab
          color="default"
          size="large"
          onClick={handleClick}
          sx={{ position: "fixed", bottom: 90, right: 20 }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom> */}
      <Footer />
    </div>
  );
};
