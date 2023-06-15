const mapping: Record<string, string> = {
  organizations: 'organization',
  'organization-users': 'organization_user',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
