// Сделайте моки для функции fetchData и напишите тесты таким образом,
// чтобы обеспечить 100% покрытие тестами функции getLevel по строкам.

import getLevel from "../mocking.getLevel";
import fetchData from "../mocking.fetchData";

jest.mock("../mocking.fetchData");

beforeEach(() => {
  jest.resetAllMocks();
});

test("should get response", () => {
  fetchData.mockReturnValue({
    status: "ok",
    level: 95
  });

  getLevel(1);
  expect(fetchData).toBeCalledWith("https://server/user/1");
});

test("should get level", () => {
  fetchData.mockReturnValue({
    status: "ok",
    level: 95
  });

  expect(getLevel(1)).toBe("Ваш текущий уровень: 95");
});

test("should return false", () => {
  fetchData.mockReturnValue({
    status: false
  });

  expect(getLevel(1)).toBe("Информация об уровне временно недоступна");
});
