// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const devicemanagerModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
describe('v1.DeviceManagerClient', () => {
  it('has servicePath', () => {
    const servicePath = devicemanagerModule.v1.DeviceManagerClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint = devicemanagerModule.v1.DeviceManagerClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = devicemanagerModule.v1.DeviceManagerClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new devicemanagerModule.v1.DeviceManagerClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new devicemanagerModule.v1.DeviceManagerClient({
      fallback: true,
    });
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new devicemanagerModule.v1.DeviceManagerClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.deviceManagerStub, undefined);
    await client.initialize();
    assert(client.deviceManagerStub);
  });
  it('has close method', () => {
    const client = new devicemanagerModule.v1.DeviceManagerClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });
  describe('createDeviceRegistry', () => {
    it('invokes createDeviceRegistry without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.ICreateDeviceRegistryRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createDeviceRegistry = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createDeviceRegistry(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createDeviceRegistry with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.ICreateDeviceRegistryRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createDeviceRegistry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createDeviceRegistry(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getDeviceRegistry', () => {
    it('invokes getDeviceRegistry without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IGetDeviceRegistryRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getDeviceRegistry = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getDeviceRegistry(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getDeviceRegistry with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IGetDeviceRegistryRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getDeviceRegistry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getDeviceRegistry(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateDeviceRegistry', () => {
    it('invokes updateDeviceRegistry without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IUpdateDeviceRegistryRequest = {};
      request.deviceRegistry = {};
      request.deviceRegistry.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateDeviceRegistry = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateDeviceRegistry(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateDeviceRegistry with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IUpdateDeviceRegistryRequest = {};
      request.deviceRegistry = {};
      request.deviceRegistry.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateDeviceRegistry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateDeviceRegistry(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteDeviceRegistry', () => {
    it('invokes deleteDeviceRegistry without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IDeleteDeviceRegistryRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteDeviceRegistry = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteDeviceRegistry(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteDeviceRegistry with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IDeleteDeviceRegistryRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteDeviceRegistry = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteDeviceRegistry(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createDevice', () => {
    it('invokes createDevice without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.ICreateDeviceRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createDevice = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createDevice(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createDevice with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.ICreateDeviceRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createDevice = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createDevice(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getDevice', () => {
    it('invokes getDevice without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IGetDeviceRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getDevice = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getDevice(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getDevice with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IGetDeviceRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getDevice = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getDevice(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateDevice', () => {
    it('invokes updateDevice without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IUpdateDeviceRequest = {};
      request.device = {};
      request.device.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateDevice = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateDevice(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateDevice with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IUpdateDeviceRequest = {};
      request.device = {};
      request.device.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateDevice = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateDevice(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteDevice', () => {
    it('invokes deleteDevice without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IDeleteDeviceRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteDevice = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteDevice(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteDevice with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IDeleteDeviceRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteDevice = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteDevice(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('modifyCloudToDeviceConfig', () => {
    it('invokes modifyCloudToDeviceConfig without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IModifyCloudToDeviceConfigRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.modifyCloudToDeviceConfig = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.modifyCloudToDeviceConfig(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes modifyCloudToDeviceConfig with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IModifyCloudToDeviceConfigRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.modifyCloudToDeviceConfig = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.modifyCloudToDeviceConfig(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('listDeviceConfigVersions', () => {
    it('invokes listDeviceConfigVersions without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IListDeviceConfigVersionsRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listDeviceConfigVersions = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.listDeviceConfigVersions(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listDeviceConfigVersions with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IListDeviceConfigVersionsRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listDeviceConfigVersions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.listDeviceConfigVersions(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('listDeviceStates', () => {
    it('invokes listDeviceStates without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IListDeviceStatesRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listDeviceStates = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.listDeviceStates(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listDeviceStates with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IListDeviceStatesRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listDeviceStates = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.listDeviceStates(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.ISetIamPolicyRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.setIamPolicy(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes setIamPolicy with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.ISetIamPolicyRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.setIamPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.setIamPolicy(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getIamPolicy', () => {
    it('invokes getIamPolicy without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.IGetIamPolicyRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getIamPolicy(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getIamPolicy with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.IGetIamPolicyRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getIamPolicy = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getIamPolicy(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('testIamPermissions', () => {
    it('invokes testIamPermissions without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.ITestIamPermissionsRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.testIamPermissions(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes testIamPermissions with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.iam.v1.ITestIamPermissionsRequest = {};
      request.resource = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.testIamPermissions = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.testIamPermissions(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('sendCommandToDevice', () => {
    it('invokes sendCommandToDevice without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.ISendCommandToDeviceRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.sendCommandToDevice = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.sendCommandToDevice(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes sendCommandToDevice with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.ISendCommandToDeviceRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.sendCommandToDevice = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.sendCommandToDevice(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('bindDeviceToGateway', () => {
    it('invokes bindDeviceToGateway without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IBindDeviceToGatewayRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.bindDeviceToGateway = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.bindDeviceToGateway(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes bindDeviceToGateway with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IBindDeviceToGatewayRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.bindDeviceToGateway = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.bindDeviceToGateway(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('unbindDeviceFromGateway', () => {
    it('invokes unbindDeviceFromGateway without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IUnbindDeviceFromGatewayRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.unbindDeviceFromGateway = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.unbindDeviceFromGateway(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes unbindDeviceFromGateway with error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IUnbindDeviceFromGatewayRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.unbindDeviceFromGateway = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.unbindDeviceFromGateway(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('listDeviceRegistries', () => {
    it('invokes listDeviceRegistries without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IListDeviceRegistriesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listDeviceRegistries = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listDeviceRegistries(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listDeviceRegistriesStream', () => {
    it('invokes listDeviceRegistriesStream without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IListDeviceRegistriesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listDeviceRegistries = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listDeviceRegistriesStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
  describe('listDevices', () => {
    it('invokes listDevices without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IListDevicesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listDevices = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listDevices(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listDevicesStream', () => {
    it('invokes listDevicesStream without error', done => {
      const client = new devicemanagerModule.v1.DeviceManagerClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.iot.v1.IListDevicesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listDevices = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listDevicesStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
});
