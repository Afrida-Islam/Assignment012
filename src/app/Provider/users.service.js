"use server";

export const signup = async (data) => {
  try {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Signup failed");
    }

    return await res.json();
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};
//
