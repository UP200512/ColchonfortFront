-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2023 a las 22:28:29
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `new_bar_pen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_de_pedidos`
--

CREATE TABLE `detalle_de_pedidos` (
  `id_detalle` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT 0,
  `precio_unitario` decimal(10,2) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_de_pedidos`
--

INSERT INTO `detalle_de_pedidos` (`id_detalle`, `id_pedido`, `id_producto`, `cantidad`, `precio_unitario`, `fecha`) VALUES
(1, 15, 2, 10, 60.00, '2023-07-31 16:54:40'),
(2, 15, 3, 10, 70.00, '2023-07-31 16:54:40'),
(3, 15, 2, 10, 60.00, '2023-07-31 16:55:39'),
(4, 15, 3, 10, 70.00, '2023-07-31 16:55:39'),
(5, 15, 3, 1, 70.00, '2023-07-31 21:10:39'),
(6, 15, 8, 1, 654.00, '2023-07-31 21:10:39'),
(7, 15, 3, 1, 70.00, '2023-07-31 21:11:18'),
(8, 15, 8, 1, 654.00, '2023-07-31 21:11:18'),
(1, 16, 1, 1, 55.00, '2023-07-31 22:51:30'),
(2, 16, 2, 1, 60.00, '2023-07-31 22:51:30'),
(1, 17, 1, 6, 55.00, '2023-07-31 23:40:38'),
(1, 18, 11, 2, 45.00, '2023-07-31 23:43:16'),
(1, 19, 3, 2, 70.00, '2023-07-31 23:45:09'),
(2, 19, 8, 1, 654.00, '2023-07-31 23:45:09'),
(3, 19, 9, 1, 14.00, '2023-07-31 23:45:09'),
(4, 19, 11, 1, 45.00, '2023-07-31 23:45:09'),
(1, 20, 1, 2, 55.00, '2023-08-01 00:30:27'),
(1, 21, 1, 1, 55.00, '2023-08-01 00:33:06'),
(2, 21, 1, 1, 55.00, '2023-08-01 00:57:35'),
(3, 21, 2, 1, 60.00, '2023-08-01 00:57:35'),
(1, 22, 2, 1, 60.00, '2023-08-01 01:03:28'),
(2, 22, 3, 1, 70.00, '2023-08-01 01:03:28'),
(3, 22, 1, 1, 55.00, '2023-08-01 01:03:28'),
(1, 23, 9, 1, 14.00, '2023-08-01 01:09:48'),
(2, 23, 8, 1, 654.00, '2023-08-01 01:09:48'),
(3, 23, 9, 2, 14.00, '2023-08-02 23:47:33'),
(4, 23, 11, 2, 45.00, '2023-08-02 23:47:33'),
(5, 23, 8, 2, 654.00, '2023-08-02 23:47:33'),
(6, 23, 3, 2, 70.00, '2023-08-02 23:47:33'),
(7, 23, 2, 1, 60.00, '2023-08-02 23:47:33'),
(8, 23, 1, 2, 55.00, '2023-08-02 23:47:33'),
(9, 23, 12, 1, 75.00, '2023-08-02 23:47:33'),
(10, 23, 13, 1, 78.00, '2023-08-02 23:47:33'),
(1, 24, 1, 1, 55.00, '2023-08-02 23:53:35'),
(2, 24, 1, 1, 55.00, '2023-08-03 00:03:35'),
(3, 24, 2, 1, 60.00, '2023-08-03 00:03:35'),
(1, 25, 1, 1, 55.00, '2023-08-03 01:40:35'),
(2, 25, 2, 1, 60.00, '2023-08-03 01:40:35'),
(1, 26, 2, 1, 60.00, '2023-08-09 00:04:30'),
(1, 27, 2, 1, 60.00, '2023-08-09 07:35:38'),
(2, 27, 3, 2, 70.00, '2023-08-09 07:35:38'),
(3, 27, 9, 1, 14.00, '2023-08-09 07:35:38'),
(4, 27, 2, 1, 60.00, '2023-08-09 07:38:16'),
(5, 27, 3, 2, 70.00, '2023-08-09 07:38:16'),
(6, 27, 9, 1, 14.00, '2023-08-09 07:38:16'),
(7, 27, 3, 1, 70.00, '2023-08-09 07:40:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_de_productos`
--

CREATE TABLE `detalle_de_productos` (
  `id_detalle` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_insumo` int(11) NOT NULL,
  `cantidad` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_de_productos`
--

INSERT INTO `detalle_de_productos` (`id_detalle`, `id_producto`, `id_insumo`, `cantidad`) VALUES
(10, 1, 5, 5.00),
(11, 12, 5, 75.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `calle` varchar(50) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `localidad` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `telefono` bigint(20) DEFAULT NULL,
  `correo` varchar(65) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`id`, `nombre`, `calle`, `numero`, `localidad`, `estado`, `telefono`, `correo`) VALUES
(1, 'Localhosters', 'Recinto de Acanto', 21, 'Laureles del Sur', 'Aguascalientes', 4951214514, 'jprdzserna@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `insumos`
--

CREATE TABLE `insumos` (
  `id_insumo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `tipo_insumo_id` int(11) NOT NULL,
  `unidad_de_medida_id` int(11) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `insumos`
--

INSERT INTO `insumos` (`id_insumo`, `nombre`, `tipo_insumo_id`, `unidad_de_medida_id`, `descripcion`, `cantidad`) VALUES
(5, 'Salecita', 1, 1, 'Salesita', 78),
(13, 'Pimienta', 2, 1, 'Pimienta negra recien molida', 80),
(15, 'lechuga', 1, 1, 'a poco si', 55),
(17, 'algo nuevo', 3, 1, 'frfrf', 88);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id_pago` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL DEFAULT 0.00,
  `total` decimal(10,2) NOT NULL DEFAULT 0.00,
  `tipo` varchar(25) NOT NULL DEFAULT 'efectivo',
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id_pago`, `id_pedido`, `id_producto`, `cantidad`, `precio_unitario`, `total`, `tipo`, `fecha`) VALUES
(1, 15, 2, 10, 60.00, 600.00, 'Efectivo', '2023-07-31 20:23:28'),
(1, 15, 3, 10, 70.00, 700.00, 'Efectivo', '2023-07-31 20:23:28'),
(2, 15, 2, 10, 60.00, 600.00, 'Efectivo', '2023-07-31 20:24:00'),
(2, 15, 3, 10, 70.00, 700.00, 'Efectivo', '2023-07-31 20:24:00'),
(3, 15, 3, 1, 70.00, 70.00, 'Efectivo', '2023-07-31 21:10:54'),
(3, 15, 8, 1, 654.00, 654.00, 'Efectivo', '2023-07-31 21:10:54'),
(4, 15, 3, 1, 70.00, 70.00, 'Tarjeta de crédito', '2023-07-31 21:13:29'),
(4, 15, 8, 1, 654.00, 654.00, 'Tarjeta de crédito', '2023-07-31 21:13:29'),
(5, 16, 1, 1, 55.00, 55.00, 'Efectivo', '2023-07-31 22:51:36'),
(5, 16, 2, 1, 60.00, 60.00, 'Efectivo', '2023-07-31 22:51:36'),
(6, 17, 1, 6, 55.00, 330.00, 'Efectivo', '2023-07-31 23:40:47'),
(7, 21, 1, 1, 55.00, 55.00, 'Efectivo', '2023-08-01 00:57:14'),
(8, 21, 1, 1, 55.00, 55.00, 'Efectivo', '2023-08-01 00:58:36'),
(8, 21, 2, 1, 60.00, 60.00, 'Efectivo', '2023-08-01 00:58:36'),
(9, 23, 8, 1, 654.00, 654.00, 'Efectivo', '2023-08-01 01:51:47'),
(9, 23, 9, 1, 14.00, 14.00, 'Efectivo', '2023-08-01 01:51:47'),
(10, 23, 1, 2, 55.00, 110.00, 'Efectivo', '2023-08-02 23:49:56'),
(10, 23, 2, 1, 60.00, 60.00, 'Efectivo', '2023-08-02 23:49:56'),
(10, 23, 3, 2, 70.00, 140.00, 'Efectivo', '2023-08-02 23:49:56'),
(10, 23, 8, 2, 654.00, 1308.00, 'Efectivo', '2023-08-02 23:49:56'),
(10, 23, 9, 2, 14.00, 28.00, 'Efectivo', '2023-08-02 23:49:56'),
(10, 23, 11, 2, 45.00, 90.00, 'Efectivo', '2023-08-02 23:49:56'),
(10, 23, 12, 1, 75.00, 75.00, 'Efectivo', '2023-08-02 23:49:56'),
(10, 23, 13, 1, 78.00, 78.00, 'Efectivo', '2023-08-02 23:49:56'),
(11, 24, 1, 1, 55.00, 55.00, 'Efectivo', '2023-08-02 23:53:39'),
(12, 24, 1, 1, 55.00, 55.00, 'Efectivo', '2023-08-03 01:24:20'),
(13, 25, 1, 1, 55.00, 55.00, 'Efectivo', '2023-08-03 14:48:25'),
(14, 25, 2, 1, 60.00, 60.00, 'Efectivo', '2023-08-07 20:57:53'),
(15, 27, 2, 1, 60.00, 60.00, 'Efectivo', '2023-08-09 07:35:45'),
(15, 27, 3, 2, 70.00, 140.00, 'Efectivo', '2023-08-09 07:35:45'),
(15, 27, 9, 1, 14.00, 14.00, 'Efectivo', '2023-08-09 07:35:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `total` decimal(10,2) NOT NULL,
  `mesa` int(11) NOT NULL DEFAULT 0,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `fecha`, `total`, `mesa`, `activo`) VALUES
(15, '2023-07-31 16:54:40', 4048.00, 2, 0),
(16, '2023-07-31 22:51:30', 115.00, 3, 0),
(17, '2023-07-31 23:40:38', 330.00, 1, 0),
(18, '2023-07-31 23:43:16', 90.00, 2, 0),
(19, '2023-07-31 23:45:09', 853.00, 2, 0),
(20, '2023-08-01 00:30:27', 110.00, 2, 0),
(21, '2023-08-01 00:33:06', 170.00, 2, 0),
(22, '2023-08-01 01:03:28', 185.00, 5, 0),
(23, '2023-08-01 01:09:48', 2557.00, 1, 0),
(24, '2023-08-02 23:53:35', 170.00, 2, 0),
(25, '2023-08-03 01:40:35', 115.00, 2, 0),
(26, '2023-08-09 00:04:30', 60.00, 3, 1),
(27, '2023-08-09 07:35:38', 498.00, 55, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_en_venta`
--

CREATE TABLE `productos_en_venta` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `id_tipo_prod` int(11) DEFAULT NULL,
  `prioridad` int(11) DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos_en_venta`
--

INSERT INTO `productos_en_venta` (`id_producto`, `nombre`, `descripcion`, `precio`, `id_tipo_prod`, `prioridad`, `imagen`) VALUES
(1, 'Chilaquiles', 'chilaquiles con queso', 55.00, 1, 2, '1.jpg'),
(2, 'enmoladas', 'tortilla con mole poblano ', 60.00, 2, 1, '2.png'),
(3, 'hamburguesaXD', 'hamburguesa sencilla XD', 70.00, 1, 2, '3.png'),
(8, 'Tacos de pastor', 'Este es el producto con la prioridad más alta de todos, está muy rico, deberían probarlo mmmmmm que delicia', 654.00, 1, 3, '8.jpg'),
(9, 'hot dog', 'hot dog con salchicha sabor a pavo', 14.00, 1, 2, '9.png'),
(11, 'salchichon', 'salchicha de pavo y cerdo con salsa', 45.00, 2, 1, '11.png'),
(12, 'Papas', 'papas con queso', 75.00, 1, 1, '12.png'),
(13, 'Doritos', 'mfhgcnhgkgh', 78.00, 2, 3, '13.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_de_insumo`
--

CREATE TABLE `tipos_de_insumo` (
  `id_tipo` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_de_insumo`
--

INSERT INTO `tipos_de_insumo` (`id_tipo`, `nombre`) VALUES
(1, 'Liquido'),
(2, 'bebida'),
(3, 'no lo habías visto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_de_usuarios`
--

CREATE TABLE `tipos_de_usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_de_usuarios`
--

INSERT INTO `tipos_de_usuarios` (`id`, `nombre`) VALUES
(1, 'default'),
(5, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_de_producto`
--

CREATE TABLE `tipo_de_producto` (
  `id_tipo_prod` int(11) NOT NULL,
  `nombre` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_de_producto`
--

INSERT INTO `tipo_de_producto` (`id_tipo_prod`, `nombre`) VALUES
(1, 'desayuno'),
(2, 'embutidos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidades_de_medida`
--

CREATE TABLE `unidades_de_medida` (
  `id_unidad` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `abreviacion` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `unidades_de_medida`
--

INSERT INTO `unidades_de_medida` (`id_unidad`, `nombre`, `abreviacion`) VALUES
(1, 'Gramos', 'gr');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(75) NOT NULL,
  `clave` varchar(250) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `tipo` int(11) DEFAULT 0,
  `alterado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `clave`, `email`, `tipo`, `alterado`) VALUES
(1, 'normal', '$2a$10$Aze1/TkEeFlVRItWep.ktuTl6jKQTFDcRcV8IbVTMrTR0cEXHISnK', 'jprdzserna@gmail.com', 5, '2023-08-09 17:53:40');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detalle_de_pedidos`
--
ALTER TABLE `detalle_de_pedidos`
  ADD KEY `id_detalle` (`id_detalle`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `detalle_de_productos`
--
ALTER TABLE `detalle_de_productos`
  ADD PRIMARY KEY (`id_detalle`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_insumo` (`id_insumo`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `insumos`
--
ALTER TABLE `insumos`
  ADD PRIMARY KEY (`id_insumo`),
  ADD KEY `tipo_insumo_id` (`tipo_insumo_id`),
  ADD KEY `unidad_de_medida_id` (`unidad_de_medida_id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id_pago`,`id_pedido`,`id_producto`),
  ADD KEY `idx_id_pedido` (`id_pedido`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `productos_en_venta`
--
ALTER TABLE `productos_en_venta`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `fk_tipo_prod` (`id_tipo_prod`);

--
-- Indices de la tabla `tipos_de_insumo`
--
ALTER TABLE `tipos_de_insumo`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Indices de la tabla `tipos_de_usuarios`
--
ALTER TABLE `tipos_de_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_de_producto`
--
ALTER TABLE `tipo_de_producto`
  ADD PRIMARY KEY (`id_tipo_prod`);

--
-- Indices de la tabla `unidades_de_medida`
--
ALTER TABLE `unidades_de_medida`
  ADD PRIMARY KEY (`id_unidad`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo` (`tipo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `detalle_de_productos`
--
ALTER TABLE `detalle_de_productos`
  MODIFY `id_detalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `insumos`
--
ALTER TABLE `insumos`
  MODIFY `id_insumo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `productos_en_venta`
--
ALTER TABLE `productos_en_venta`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `tipos_de_insumo`
--
ALTER TABLE `tipos_de_insumo`
  MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipos_de_usuarios`
--
ALTER TABLE `tipos_de_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_de_producto`
--
ALTER TABLE `tipo_de_producto`
  MODIFY `id_tipo_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `unidades_de_medida`
--
ALTER TABLE `unidades_de_medida`
  MODIFY `id_unidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_de_pedidos`
--
ALTER TABLE `detalle_de_pedidos`
  ADD CONSTRAINT `detalle_de_pedidos_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`),
  ADD CONSTRAINT `detalle_de_pedidos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos_en_venta` (`id_producto`);

--
-- Filtros para la tabla `detalle_de_productos`
--
ALTER TABLE `detalle_de_productos`
  ADD CONSTRAINT `detalle_de_productos_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos_en_venta` (`id_producto`);

--
-- Filtros para la tabla `insumos`
--
ALTER TABLE `insumos`
  ADD CONSTRAINT `insumos_ibfk_1` FOREIGN KEY (`tipo_insumo_id`) REFERENCES `tipos_de_insumo` (`id_tipo`),
  ADD CONSTRAINT `insumos_ibfk_2` FOREIGN KEY (`unidad_de_medida_id`) REFERENCES `unidades_de_medida` (`id_unidad`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id_pedido`),
  ADD CONSTRAINT `pagos_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos_en_venta` (`id_producto`);

--
-- Filtros para la tabla `productos_en_venta`
--
ALTER TABLE `productos_en_venta`
  ADD CONSTRAINT `fk_tipo_prod` FOREIGN KEY (`id_tipo_prod`) REFERENCES `tipo_de_producto` (`id_tipo_prod`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`tipo`) REFERENCES `tipos_de_usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
