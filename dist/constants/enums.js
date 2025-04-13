"use strict";
// src/constants/enums.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceType = exports.UserRole = exports.IncidentStatus = exports.ServiceStatus = exports.OrgRole = void 0;
var OrgRole;
(function (OrgRole) {
    OrgRole["ADMIN"] = "ADMIN";
    OrgRole["MEMBER"] = "MEMBER";
})(OrgRole || (exports.OrgRole = OrgRole = {}));
var ServiceStatus;
(function (ServiceStatus) {
    ServiceStatus["OPERATIONAL"] = "OPERATIONAL";
    ServiceStatus["DEGRADED"] = "DEGRADED";
    ServiceStatus["PARTIAL_OUTAGE"] = "PARTIAL_OUTAGE";
    ServiceStatus["MAJOR_OUTAGE"] = "MAJOR_OUTAGE";
})(ServiceStatus || (exports.ServiceStatus = ServiceStatus = {}));
var IncidentStatus;
(function (IncidentStatus) {
    IncidentStatus["INVESTIGATING"] = "INVESTIGATING";
    IncidentStatus["IDENTIFIED"] = "IDENTIFIED";
    IncidentStatus["MONITORING"] = "MONITORING";
    IncidentStatus["RESOLVED"] = "RESOLVED";
    IncidentStatus["SCHEDULED"] = "SCHEDULED";
})(IncidentStatus || (exports.IncidentStatus = IncidentStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["SUPERUSER"] = "SUPERUSER";
    UserRole["USER"] = "USER";
})(UserRole || (exports.UserRole = UserRole = {}));
var ServiceType;
(function (ServiceType) {
    ServiceType["WEBSITE"] = "WEBSITE";
    ServiceType["API"] = "API";
    ServiceType["DATABASE"] = "DATABASE";
    ServiceType["CACHE"] = "CACHE";
    ServiceType["STORAGE"] = "STORAGE";
    ServiceType["AUTHENTICATION"] = "AUTHENTICATION";
    ServiceType["PAYMENT_GATEWAY"] = "PAYMENT_GATEWAY";
    ServiceType["EMAIL"] = "EMAIL";
    ServiceType["CDN"] = "CDN";
    ServiceType["BACKEND"] = "BACKEND";
    ServiceType["OTHER"] = "OTHER";
})(ServiceType || (exports.ServiceType = ServiceType = {}));
