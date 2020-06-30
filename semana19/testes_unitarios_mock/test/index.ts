import { validateCharacter, Character } from "../src/validateCharacter";
import { performAttack } from "../src/performAttack";

describe("validateCharacter", () => {
  //A
  test("Should return false for empty name", () => { 
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });
  
    expect(result).toBe(false);
  });

  // B
  test("Should return false for empty life", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: undefined,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

// C
  test("Should return false for empty strength", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: undefined,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  // D
  test("Should return false for empty defense", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 500,
      defense: undefined,
    });

    expect(result).toBe(false);
  });

  // E
  test("Should return true for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 0,
    });
  
    expect(result).toBe(true);
  });

//  F
test("Should return true for life 0", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(true);
});

  // G
  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
})

describe("performAttack", () => {
  test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});

  test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
      return false
    });
  });

  test("Showing jest.fn", () => {
    const mock = jest.fn(() => {
      const user = {
          name: "Astrodev",
          age: 29
      }
      return user
    })
  })

  test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
  
  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
})

