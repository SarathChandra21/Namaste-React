import { screen, render, fireEvent } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should test login button in the header",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0 ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart - (0 items)");
    expect(cartItems).toBeInTheDocument();
  });

  it("Should render Header Component with a Cart item ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });

  it("Should change login to logout button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "logout"});

    expect(logoutButton).toBeInTheDocument();
});


