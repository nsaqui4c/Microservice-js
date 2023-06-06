# Microservices

### Two ways of communication between Services
* Sync -> services communicate between each other using direct service
  * Main service needs to communicate with 3 other services, to fetch collect and create response for FE
  * If any one of sub-services are down whole operation will get failed
* Async -> Services communicate between each other using events.
  * All service will have its own DB (No main service)
  * If any service needs data from other service, it will not call the other service to get data
    * instead Other service will send event in case of any change, and hence all the DB will be in sync
    * means it will have data of other service also (duplicay of data will be there, but services will be independent)
  * Event bus is used to send event in case of any change in DB, and those service which needs to be in sync will update there DB.
 

