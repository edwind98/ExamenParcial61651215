CREATE TRIGGER ActInv
on PedidoDetalle for Insert
as
set nocount on
update Producto set Producto.existencias = Producto.existencias + inserted.cantidad from inserted
inner join Producto on Producto.producto_id = inserted.producto_id

Select P.producto_id, P.nombre, ISNULL(P.existencias, '0') as ExistenciaProducto, P.categoria_id, Pd.fecha_emision, Pd.fecha_entrega
FROM Producto P
RIGHT JOIN Pedidos Pd
ON P.proveedor_id = Pd.proveedor_id