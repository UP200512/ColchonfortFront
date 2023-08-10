const token = localStorage.getItem('token');
export const defaultrequestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
}