--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)

-- Started on 2021-05-24 16:52:55 +06

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16545)
-- Name: Autos; Type: TABLE; Schema: public; Owner: aparu
--

CREATE TABLE public."Autos" (
    "Id" integer NOT NULL,
    "Brand" text,
    "Model" text
);


ALTER TABLE public."Autos" OWNER TO aparu;

--
-- TOC entry 202 (class 1259 OID 16543)
-- Name: Autos_Id_seq; Type: SEQUENCE; Schema: public; Owner: aparu
--

ALTER TABLE public."Autos" ALTER COLUMN "Id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Autos_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 205 (class 1259 OID 16555)
-- Name: Drivers; Type: TABLE; Schema: public; Owner: aparu
--

CREATE TABLE public."Drivers" (
    "Id" integer NOT NULL,
    "Name" text,
    "AutoId" integer
);


ALTER TABLE public."Drivers" OWNER TO aparu;

--
-- TOC entry 204 (class 1259 OID 16553)
-- Name: Drivers_Id_seq; Type: SEQUENCE; Schema: public; Owner: aparu
--

ALTER TABLE public."Drivers" ALTER COLUMN "Id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Drivers_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2975 (class 0 OID 16545)
-- Dependencies: 203
-- Data for Name: Autos; Type: TABLE DATA; Schema: public; Owner: aparu
--

COPY public."Autos" ("Id", "Brand", "Model") FROM stdin;
2	Honda	Civic
1	Toyota	Camry
3	Lada	Granta
\.


--
-- TOC entry 2977 (class 0 OID 16555)
-- Dependencies: 205
-- Data for Name: Drivers; Type: TABLE DATA; Schema: public; Owner: aparu
--

COPY public."Drivers" ("Id", "Name", "AutoId") FROM stdin;
10	Иван Петров	2
12	Василий Дмитриев	1
11	Петр Иванов	\N
\.


--
-- TOC entry 2984 (class 0 OID 0)
-- Dependencies: 202
-- Name: Autos_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: aparu
--

SELECT pg_catalog.setval('public."Autos_Id_seq"', 5, true);


--
-- TOC entry 2985 (class 0 OID 0)
-- Dependencies: 204
-- Name: Drivers_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: aparu
--

SELECT pg_catalog.setval('public."Drivers_Id_seq"', 14, true);


--
-- TOC entry 2843 (class 2606 OID 16552)
-- Name: Autos PK_Autos; Type: CONSTRAINT; Schema: public; Owner: aparu
--

ALTER TABLE ONLY public."Autos"
    ADD CONSTRAINT "PK_Autos" PRIMARY KEY ("Id");


--
-- TOC entry 2846 (class 2606 OID 16562)
-- Name: Drivers PK_Drivers; Type: CONSTRAINT; Schema: public; Owner: aparu
--

ALTER TABLE ONLY public."Drivers"
    ADD CONSTRAINT "PK_Drivers" PRIMARY KEY ("Id");


--
-- TOC entry 2844 (class 1259 OID 16568)
-- Name: IX_Drivers_AutoId; Type: INDEX; Schema: public; Owner: aparu
--

CREATE INDEX "IX_Drivers_AutoId" ON public."Drivers" USING btree ("AutoId");


--
-- TOC entry 2847 (class 2606 OID 16563)
-- Name: Drivers FK_Drivers_Autos_AutoId; Type: FK CONSTRAINT; Schema: public; Owner: aparu
--

ALTER TABLE ONLY public."Drivers"
    ADD CONSTRAINT "FK_Drivers_Autos_AutoId" FOREIGN KEY ("AutoId") REFERENCES public."Autos"("Id");


--
-- TOC entry 2983 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: aparu
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO aparu;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- TOC entry 1698 (class 826 OID 16416)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public REVOKE ALL ON TABLES  FROM postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO aparu;


--
-- TOC entry 1697 (class 826 OID 16415)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES  TO aparu WITH GRANT OPTION;


-- Completed on 2021-05-24 16:52:55 +06

--
-- PostgreSQL database dump complete
--

