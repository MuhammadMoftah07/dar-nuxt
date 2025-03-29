export const $http = (request, opts?) => {
  const config = useRuntimeConfig();
  const { token } = useAuth();

  return $fetch(request, {
    baseURL: config.public.baseURL,
    headers: {
      Authorization: token.value,
    },
    ...opts,
  });
};

export const $httpV2 = (request, opts?) => {
  const config = useRuntimeConfig();
  const { token } = useAuth();

  return $fetch(request, {
    baseURL: config.public.baseURL_V2,
    headers: {
      Authorization: token.value,
    },
    ...opts,
  });
};
