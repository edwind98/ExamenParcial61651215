use Mercado
GO  
--vista transaccion proveedor
CREATE VIEW transaccion  
AS   
select p.proveedor_id as CodigoProveedor, p.nombre as Nombre, p.empresa as Empresa,pro.precio_venta as PrecioVenta, pro.costo_compra as CostoCompra, pro.existencias as Existencias,
info.telefono as Contacto, info.direccion as Direccion
from Proveedor p
inner join Producto pro on pro.proveedor_id=P.proveedor_id 
inner join InformarcionGeneral info on p.InformarcionGeneralId=info.InformarcionGeneralId
GO  

--vista transaccion cliente
CREATE VIEW transaccion_cli 
AS   
select c.cliente_id as CodigoCliente, c.nombre as Nombre, c.credito as Cresito, c.saldo as Saldo, p.cuentaContable_id as Cuenta, p.pago_id as Pago, cc.concepto as Concepto, cc.fecha as Fecha
from Cliente c
inner join Pago p on p.cliente_id=c.cliente_id
inner join Cuenta_Contable cc on cc.cuenta_id=p.cuentaContable_id
GO 
--vista de venta de productos
CREATE VIEW ventaProductos
AS   
select c.categoria_id as Categoria, c.nombre as Nombre, c.descripcion as Descripcion, p.costo_compra as PrecioCompra, p.precio_venta as PrecioVenta, p.existencias as EnExistencia
from Categoria c
inner join Producto p on p.categoria_id=c.categoria_id
GO 
--vista Pagos Clientes
CREATE VIEW PagosClientes
AS
select c.cliente_id as Codigo, c.nombre as Nombre, c.credito as Credito, c.saldo as Saldo, p.pago_id as Pago, cc.cuentaContable_id as CuentaContable, cc.concepto as Concepto, cc.fecha as Fecha
from Cuenta_Contable cc
inner join Pago p on p.cuentaContable_id=cc.cuentaContable_id
inner join Cliente c on c.cliente_id=p.cliente_id
GO 
--vista producto
CREATE VIEW Productos
AS
select pr.proveedor_id as Proveedor, pr.nombre as Nombre, pr.empresa as Empresa, p.producto_id CodigoProducto, p.nombre as NombrePRoducto, p.costo_compra as PrecioCompra, p.precio_venta as PrecioVenta
from Proveedor pr
inner join Producto p on p.proveedor_id=p.proveedor_id
GO 