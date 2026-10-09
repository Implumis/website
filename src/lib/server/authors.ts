//
// [SECTION] Defines
//

export const AUTHORS: Record<string, Author> = {
  charles: { name: "Charles", url: "https://axxowastaken.me" },
  eliott: { name: "Éliott" },
};

//
// [SECTION] Types
//

interface Author {
  name: string;
  url?: string;
}
