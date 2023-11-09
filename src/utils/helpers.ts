type Params = {
  entityId: string;
  entityName: string;
  entityImage: string;
  entityCountry: string;
};

/**
 * Substitute route parameters in a given route string.
 * @param route - The route string with placeholders.
 * @param params - An object containing parameter key-value pairs.
 * @returns The route string with placeholders replaced by corresponding parameter values.
 */
export const substituteRouteParams = (route: string, params: Params) => {
  let replacedRoute = route;

  Object.entries(params).forEach(([key, value]) => {
    replacedRoute = replacedRoute.replace(`:${key}`, value);
  });

  return replacedRoute;
};

/**
 * Returns the initials of a given name.
 * @param name - The name to get the initials from.
 * @returns The initials of the given name.
 */
export const getInitials = (name: string | undefined): string => {
  const parts = name?.split(' ');
  const initials = parts?.map((part) => part.charAt(0).toUpperCase());
  return initials?.join('') || '';
};
