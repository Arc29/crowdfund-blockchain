'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQU8sQUFBYjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE0QixBQUE1QixrQkFDUyxBQURULElBQ2EsQUFEYix1QkFDbUMsQUFEbkMsbUJBRVMsQUFGVCxJQUVhLEFBRmIsZ0NBRTRDLEFBRjVDLDZCQUdTLEFBSFQsSUFHYSxBQUhiLG9DQUdnRCxBQUhoRDs7QUFLQSxPQUFPLEFBQVAsVUFBZSxBQUFmIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcmNnZWVrei9kZXZlbG9wbWVudC9jYW1wYWlnbi1jb250cmFjdCJ9