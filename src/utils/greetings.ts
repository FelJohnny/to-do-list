export const getGreeting = (): string => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Bom dia";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
};

export const getGreetingWithName = (userName: string | null): string => {
  const greeting = getGreeting();
  
  if (userName) {
    return `${greeting}, ${userName.split(" ")[0]}!`;
  }
  
  return `${greeting}!`;
};


export const getGreetingEmoji = (): string => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "☀️"; // Sol da manhã
  } else if (currentHour >= 12 && currentHour < 18) {
    return "🌤️"; // Sol da tarde
  } else if (currentHour >= 18 && currentHour < 22) {
    return "🌅"; // Entardecer
  } else {
    return "🌙"; // Noite
  }
};

// Função completa
export const getFullGreeting = (userName: string | null): string => {
  const greeting = getGreetingWithName(userName);
  const emoji = getGreetingEmoji();
  
  return `${emoji} ${greeting}`;
};