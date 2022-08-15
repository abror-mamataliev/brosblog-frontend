export const logoUrl = "https://allfont.ru/cache/img";
export const logoFont = "font-4168";
export const logoBrand = "Bro's Blog";
export const logoFile = "brosblog.png";
export const logoColor = "ffffff";

export const logoGenerator = (
  logoUrl: string,
  logoFont: string,
  logoBrand: string,
  logoFile: string,
  logoColor: string
) => {
  return `${logoUrl}/${logoFont}_${logoBrand}_${logoFile}?color=${logoColor}`;
};
