import { render } from "@testing-library/react-native";

import  HomeScreen  from "../../screens/HomeScreen";

describe("Home screen", () => {
  it("it should render the home screen", () => {
    render(<HomeScreen />);
  });

  it("it should render the seach input with length restriction", () => {
    const { getByTestId } = render(<HomeScreen />);
    const searchInput = getByTestId("search-home-input-id");

    expect(searchInput.props.maxLength).toBeLessThanOrEqual(42);
  });
});