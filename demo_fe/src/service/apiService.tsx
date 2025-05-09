export const getPaginated = async (page: number, size: number, sort: string = 'default') => {
  const url = new URL('http://localhost:8080/api/medicines/paginated');
  url.searchParams.append('page', page.toString());
  url.searchParams.append('size', size.toString());
  if (sort && sort !== 'default') {
    url.searchParams.append('sort', sort);
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
};
export const getById = async (id: number) => {
  const res = await fetch(`/api/medicines/${id}`);
  if (!res.ok) {
    throw new Error(`Không thể lấy dữ liệu sản phẩm id=${id}`);
  }
  return await res.json();
};
