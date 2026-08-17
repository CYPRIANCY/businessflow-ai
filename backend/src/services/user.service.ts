// Define the shape of the data this service expects to receive
export interface CreateUserInput {
  name: string;
  email: string;
  age: number;
}

// Define the shape of the data this service will return
export interface CreateUserResponse {
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: string;
}

/**
 * Service responsible for user business logic operations.
 * Notice: This is a pure function. It has no awareness of Express, HTTP, req, or res.
 */
export const createUserService = async (userData: CreateUserInput): Promise<CreateUserResponse> => {
  console.log(`⚙️ Service layer executing business logic for: ${userData.email}`);

  // Simulate a database save by generating an ID and an ISO timestamp
  const mockSavedUser: CreateUserResponse = {
    id: Math.random().toString(36).substring(2, 10), // Generates a random unique ID string
    name: userData.name,
    email: userData.email,
    age: userData.age,
    createdAt: new Date().toISOString(),
  };

  return mockSavedUser;
};
